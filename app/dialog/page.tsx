import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DialogPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-3xl font-bold mb-4">Dialog Demo</h1>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Open</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>Dialog Description</DialogDescription>
                    </DialogHeader>

                    <p>Dialog Content</p>
                    <Button variant="outline">Other dialog content</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}