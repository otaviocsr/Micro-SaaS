'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('nodemailer', { email: data.email, redirect: false })
      
      toast({
        title: 'Link Mágico Enviado',
        description: 'Verifique seu e-mail para o link mágico de login'
      })
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro. Por favor, tente novamente.'
      })
    }
  })

  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">Digite seu email para efetuar o login.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="email@example.com" required type="email" {...form.register('email')} />
        </div>
        <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Enviando..." : "Enviar Link Mágico"}
        </Button>
      </form>
    </div>
  )
}

