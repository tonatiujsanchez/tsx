


export const Contact = () => {
    return (
        <section id="contact" className="py-10 sm:py-28">
            <h2 className="text-center font-extrabold text-3xl md:text-4xl uppercase mb-3">Contacto</h2>
            <p className="text-center max-w-[40rem] mx-auto md:text-lg mb-10 sm:mb-20">Si estás interesado en trabajar conmigo en tu próximo proyecto, no dudes en ponerte en contacto conmigo.</p>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 px-5">
                <div>
                    <h3 className="font-bold text-xl sm:text-[2rem] mb-2 md:mb-7">Hablemos</h3>
                    <p className="md:text-lg md:mb-7">Actualmente estoy disponible para asumir nuevos proyectos, así que siéntete libre de enviarme un mensaje sobre cualquier idea que quieras contarme.</p>
                    <ul className="flex items-center gap-4 mt-5">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-linkedin-square text-[1.8rem]'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-github text-[1.8rem]' ></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-twitter text-[1.8rem]'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-instagram text-[1.8rem]'></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <form>
                        <div className="flex flex-col gap-1 mb-4">
                            <label htmlFor="name" className="font-bold text-slate-800">Nombre</label>
                            <input 
                                id="name"
                                type="text"
                                required
                                placeholder="Ingresa tu nombre"
                                className="bg-white px-3 py-4 rounded"
                            />
                        </div>
                        <div className="flex flex-col gap-1 mb-4">
                            <label htmlFor="email" className="font-bold text-slate-800">Correo</label>
                            <input 
                                id="email"
                                type="email"
                                required
                                className="bg-white px-3 py-4 rounded"
                                placeholder="Ingresa tu correro"
                            />
                        </div>
                        <div className="flex flex-col gap-1 mb-5">
                            <label htmlFor="message" className="font-bold text-slate-800">Mensaje</label>
                            <textarea 
                                name="message"
                                id="message"
                                required
                                placeholder="Cuentame sobre tu proyecto"
                                className="bg-white px-3 py-4 rounded min-h-[16rem] max-h-[16rem]"        
                            >
                            </textarea>
                        </div>
                        <button
                            type="submit"
                            className="flex justify-center w-full md:w-auto md:ml-auto gap-2 text-white font-semibold hover:text-slate-800 bg-slate-800 hover:bg-white border border-slate-800 px-5 py-3 rounded uppercase transition-all duration-300"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
