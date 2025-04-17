import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Pagina inicial do RIASEC360.
      <Link href={"/outra"}>Link para uma subpagina</Link>
      <Link href={"http://si3cloud.ufsj.edu.br/"}>
        Voltar para a pagina Principal
      </Link>
    </div>
  );
}
