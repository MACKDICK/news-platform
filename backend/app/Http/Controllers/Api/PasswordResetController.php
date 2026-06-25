<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class PasswordResetController extends Controller
{
    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $user = User::where('email', $request->email)->first();

        // Siempre responder igual por seguridad
        if (!$user) {
            return response()->json([
                'message' => 'Si el correo existe, se enviará un enlace'
            ]);
        }

        // Generar token plano
        $token = Str::random(60);

        // Guardar token en BD (hash)
        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $request->email],
            [
                'token' => Hash::make($token),
                'created_at' => now()
            ]
        );

        // Link hacia frontend (React)
        $frontendUrl = env('FRONTEND_URL', 'http://localhost:5173');

        $resetLink = $frontendUrl . "/reset-password?token=" . $token . "&email=" . $request->email;

        // Log para pruebas (puedes verlo en storage/logs/laravel.log)
        \Log::info("RESET PASSWORD LINK: " . $resetLink);

        return response()->json([
            'message' => 'Se ha generado el enlace de recuperación (revisa logs en modo desarrollo)'
        ]);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        $record = DB::table('password_reset_tokens')
            ->where('email', $request->email)
            ->first();

        if (!$record || !Hash::check($request->token, $record->token)) {
            return response()->json([
                'message' => 'Token inválido o expirado'
            ], 400);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'message' => 'Usuario no encontrado'
            ], 404);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        DB::table('password_reset_tokens')
            ->where('email', $request->email)
            ->delete();

        return response()->json([
            'message' => 'Contraseña actualizada correctamente'
        ]);
    }
}