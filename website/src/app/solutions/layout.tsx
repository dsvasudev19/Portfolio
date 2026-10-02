import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      {children}
    </>
  );
}
