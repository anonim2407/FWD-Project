import Head from "next/head"
import HeaderPrueba from "@/components/HeaderPrueba"
import Footer from "@/components/Footer"
export default function Layout({ children, pagina }) {
    return (
        <>
            <Head>
                <title>FWD - {pagina}</title>
                <meta name="description" content="Diseño de páginas Web"></meta>
            </Head>

            <HeaderPrueba />
            {children}
            <Footer />
        </>
    )
}
