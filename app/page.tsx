import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4 text-center">
      <h1 className="text-4xl font-bold">METAL BRASILEIRO</h1><br></br>

      <p className="max-w-2xl text-lg leading-relaxed bb-8">A cena do metal brasileiro é uma das mais importantes e respeitadas do mundo, destacando-se pela diversidade de estilos e pela influência internacional. Desde as décadas de 1980 e 1990, o Brasil revelou bandas que conquistaram reconhecimento global, especialmente no thrash metal, death metal e power metal.</p>
      <p className="max-w-2xl text-lg leading-relaxed bb-8">O maior expoente é a Sepultura, que ajudou a colocar o Brasil no mapa do metal mundial ao combinar influências do thrash e do death metal com elementos da cultura brasileira. Além dela, grupos como Angra, Krisiun, Sarcófago e Claustrofobia representam diferentes vertentes do gênero.</p>
      <p className="max-w-2xl text-lg leading-relaxed bb-8">Atualmente, a cena permanece ativa, com festivais, casas de show e bandas independentes espalhadas por todo o país. Grandes centros como São Paulo, Belo Horizonte e Curitiba são conhecidos por concentrarem parte significativa da produção musical e do público do metal.</p><br></br>

      <p className="max-w-2xl text-lg leading-relaxed bb-8">
        Leia mais sobre as principais bandas brasileiras, como{" "}
        <Link href="/sepultura" className="text-blue-500 underline">
          Sepultura
        </Link>
        ,{" "}
        <Link href="/sarcofago" className="text-blue-500 underline">
          Sarcófago
        </Link>
        , e{" "}
        <Link href="/claustrofobia" className="text-blue-500 underline">
          Claustrofobia
        </Link>
        .
      </p>

      <img className="mt-4" src="/metalbrasil.jpg" alt="Metal Brasileiro" />
    </main>
  );
}
