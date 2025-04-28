import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import Link from "next/link";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export function LoginModal({ open, onClose }: LoginModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Almost there ✨</DialogTitle>
          <DialogDescription>
            Sign up to unlock your free AI generation.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="w-full mt-4" asChild>
            <Link href="/login">Sign Up to Continue</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
