import { Button } from "@/components/ui/button";

export default function ButtonsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-3xl font-bold mb-4">Buttons Demo</h1>

            <div className="flex flex-wrap gap-2 items-center justify-center">
                <Button className="cursor-pointer" variant="default">Default</Button>
                <Button className="cursor-pointer" variant="secondary">Secondary</Button>
                <Button className="cursor-pointer" variant="destructive">Destructive</Button>
                <Button className="cursor-pointer" variant="outline">Outline</Button>
                <Button className="cursor-pointer" variant="ghost">Ghost</Button>
                <Button className="cursor-pointer" variant="link">Link</Button>
            </div>
        </div>
    );
}