"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function InputPage() {
    const [email, setEmail] = useState("");

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        toast.success(`User registered successfully: ${ email }`);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-3xl font-bold mb-4">Input demo</h1>

            <form
                onSubmit={ handleSubmit }
                className="flex flex-col gap-3 w-full max-w-sm"
            >
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                </div>

                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </div>
    );
}