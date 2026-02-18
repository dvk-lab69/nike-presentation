import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "min-h-screen w-full flex flex-col justify-center px-4 py-16 md:px-8 lg:px-16 relative overflow-hidden",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
