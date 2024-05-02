import { Container } from "@/app/_components/Container";
import { QuoteWidget } from "@/app/_components/QuoteWidget";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
          <QuoteWidget />
      </Container>
    </footer>
  );
}
