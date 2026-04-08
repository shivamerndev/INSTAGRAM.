import { useSelector } from "react-redux"

const Suggest = () => {

    const { user } = useSelector(state => state.user)


    return (
        <aside className="hidden xl:block w-[320px] h-fit ml-8">
            <div className="flex items-center justify-between mb-8 cursor-pointer group">
                <div className="flex items-center gap-4">
                    <img
                        className="w-14 h-14 rounded-full object-cover group-hover:opacity-80 transition"
                        src={user.profileImage}
                        alt="Me"
                    />
                    <div>
                        <p className="text-sm font-bold text-white leading-none">{user.fullName}</p>
                        <p className="text-sm text-gray-500 font-medium tracking-tight mt-1">{user.username}</p>
                    </div>
                </div>
                <button className="text-[#c799ff] text-xs font-bold hover:text-white transition-colors">Switch</button>
            </div>

            <div className="bg-[#131313] rounded-xl p-6 border border-white/5 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Suggestions for you</h4>
                    <button className="text-white text-xs font-bold hover:text-[#c799ff] transition-colors">See All</button>
                </div>
                <div className="flex flex-col gap-5">
                    {[
                        { name: 'nova_arch', info: 'Followed by elena_v', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTGXFxTmP4yrNEG2Hem6YYN5seIm_PaXWq8AMiWw6LPFUHRLJSmOYYYoh_tlnVHB_uptWrcKXM5jpOrv_GrTjbBFG2PZOj0Xa8gsXSAXupoY0CUaKAV4m0FgjZh6HoORSG-hbTY8HQ5LQnTiIwVBphfEPNJAsTuqm4pgiAu_eRJMEcW8FDSphnPN9ui5KLoxZx0dSshZV67IePJVVq4mqkN90TZWT-e1cPVCNk-KOnUkRea5RqbGlacUl325h7h2Iwt1i1Gh-z6nV7' },
                        { name: 'kyle.theory', info: 'Followed by marcus.v', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0y1Kwd5wodvliV3QGnVA7sFZXWNcraI_QMaG94k1EtZYu4WPTS6sqOR3u0AWWFd3Oj3-SZQIQPf7zThcC-lBscXpUxRU9e4VnCDADKOWICohpT2cQRxphDdmUrHwRBe_n0yZrJmL7MgYqIMxCXn10FBO1rUNAD0osUmO4d7fTY_DVYulKPsAoR1mgj8KgB2t_xlL2vTLhB4Qfp5bJfHHWYYs2QMaXGaalSxhybk5uwA1nb1BRqyfQbKrvb4MFH3RQ64DP_nEYUa9M' },
                        { name: 'iris_bloom', info: 'New to Obsidian', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUvJrVqSjch5YJh9Jjp8LOP8uiWhLdbWDxwObIK_j_G60CCrKqHq8u0cnEGx8BokEiL6PtYbKAhCj33bvIHLD6eKxAmwEwqaqlploBtKf4dgLl0SVPxXhxXWWhnkDETfE5nG4Awg54fJQ00ibjgE50RCpoSJ4kaqn2QH0suM_zpIEOkeROaErljH_KSJ2PD8ir05z2MM-G7E8jUfJaKGusvZYyYNVPDXeEdaoaaOUPOiNpJDsK6PihMitmOQ8mNtOta5Crt6RQVbF-' }
                    ].map((sug, i) => (
                        <div key={i} className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-3">
                                <img className="w-8 h-8 rounded-full object-cover" src={sug.img} alt={sug.name} />
                                <div>
                                    <p className="text-xs font-bold text-white leading-none hover:underline">{sug.name}</p>
                                    <p className="text-[10px] text-gray-500 mt-1">{sug.info}</p>
                                </div>
                            </div>
                            <button className="text-[#c799ff] text-xs font-bold hover:text-white transition-colors">Follow</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8 px-2">
                <p className="text-[10px] text-gray-600 leading-relaxed tracking-wider font-medium">
                    About • Help • Press • API • Jobs • Privacy • Terms
                </p>
                <p className="text-[10px] text-gray-700 mt-4 uppercase tracking-widest font-bold">
                    © 2024 Midnight Editorial
                </p>
            </div>
        </aside>
    )
}

export default Suggest