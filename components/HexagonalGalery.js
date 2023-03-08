import React from 'react'
import Link from 'next/link'


const mockups = [
    {
        name: 'Autolavado Exprés',
        href: 'https://autolavadoexpres.es/',
        image: '/img/mockup/mockup_2.png'
    },
    {
        name: 'Óptica Hristovi',
        href: '#',
        image: '/img/mockup/mockup_1.png'
    },

]
    const backgroundImageProjects = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.0)),url('/img/bg_projects5.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "250px",
    };

const HexagonalGalery = () => {



    return (
        <section className='main'>
            <div className='hex'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hex top2'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex top3'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex top3'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex hex-offset top1 top2'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex top3'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex top1 top2'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex top1'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex top1'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex top1 top2'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex top1 top3'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex top1 top3'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hex'>
                <div className='hexagon gallery-item'>
                    <div className='in1'>
                        <div className='in2' style={backgroundImageProjects}>
                            <div>
                                <Link href={'/img/mockup/mockup_1.png'} rel='lightbox' className='fa fa-expand'></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HexagonalGalery
