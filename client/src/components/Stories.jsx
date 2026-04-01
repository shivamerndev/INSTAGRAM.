import React from 'react'

const Stories = () => {
    return (
        <section className="flex gap-4 shrink-0 pb-2 overflow-x-auto  " style={{ scrollbarWidth: 'none' }}>
            {/* My Story */}
            <div className=" items-center gap-2 shrink-0 cursor-pointer">
                <div className=" rounded-full border-2 border-dashed border-neutral-600 relative">
                    <img
                        className="w-16 h-16 rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIV6Np8TGFVdtFMZV6k7qLOAfSI5X2VaStLfr4snxpQvNx-hUjbBGgHfGDbw2UyxIWpCtMAzidPTmb87pMjQl2E6wRScF8C_7vhqLKIzGc9udEM28nO7iuBILg008PiF21E_x83Iy15nOHyOctjE1-FI3VHPQXZWOmQHAvfTPs9mshRaAN5sNC2XvTw2Bc_5jeiyxuY7fSE232NhE05pATqe6NY4hpZujxAN1PIP5W3NWQoEA-VxQiH-5N7JRxbVisKGDyPbeUN4E8"
                        alt="My Story"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#c799ff] text-black rounded-full p-0 border-2 border-[#0e0e0e] w-5 h-5 flex items-center justify-center">
                        <span className="text-sm font-bold leading-none">+</span>
                    </div>
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">My Story</span>
            </div>

            {/* Other Stories */}
            {[
                { name: 'elena_v', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb5gMiZ_p-VeLCIHZTWKqruxFlA_EGnEqqS4YQnLgCxoGz2Pzlko72htnSVqXow0bRQma8Y1xfpurUWa5Dmn-H0hm3vvJyEnCO4Vmhh2CXJDiPNqXVjQ8zXU3tEtbPW_MoHpg6CPf9vsLH7um2utEXNHVUYz79AAJJpACMCShXod14jJhmudg_vQiHHBBOY_vUgkbGV4AaFsOeU_traqE_GIiDrrtzBgK1rNy3HKXYTuxshl02beGBW-BxG__B8CBBsd5ctRdCgAJP' },
                { name: 'marcus.v', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7m7nvvxM2RhmPieh4ZNlqJeDg9WqRNqEcFBP7vX8z-25xoOqPTBL07DDFyfXSj_KbIjbBLOriwMzIv5_s5h8MhogAXtn6juSfNbt6CSxXT0m9nggdyQEJZ6bqNWioL6Lg-hILcp1pdXDGWyofKQPsxohtV5YcjIu0LIDRqz6JybuD5nxcSzsy-MVrxHjuMBhdTkqEI7_T6L3tvT0DDBeW8tWijkU_1g1aOJgvl9IRP9xMaaWNBR2FnCDvsS4qgrDVXnGy--I_nEOm' },
                { name: 'sofia_lux', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg-Li-cZXVf7mcZkFQ7wIzV50nuKAAqJci3hWbLr6XgWZ8KYSyb3IsSIhm8UfX8LNVUuTaQH9GKlv4dMPPvsLskSUEZdfBZmJU8BlFopKa111T9SxpbZnlq07ulwdTnxAVOcQdqI9pyqWhoTXy2qNxdJViNMjMMU52uuk0t-i7GsiVaD0qEn9RHCYYiIMNNYGqtz774_q9VeaPUQxzQrCDqY5IXailsxZsD07_0Kdbd-qTdFYfZ0U2cfN054jRfpb614uzBr_sOpD6' },
                { name: 'neon_eye', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh0HurebFLi7r_vVr60cte7Ui4GFPkPoZg3BCSr77UIKBeJqeqPOyA19s6ehdD49XUsq1qw8Ni9roosJ0xuvRAE7IM_uoNLtwvuf2STVyFntK2g5u5x6qG46t2sFeNw_EmkwaheewL1-0crHZl8zmM2eIT4_Yoz4cmCkxNgPmtCn023sJsDo7vFLvxeTKSGTo62pPws-IXkeszUhnY_DsSJisGuc8PIlaY1dTlpScnVvR1UMJrcPKEZ0mAU-pgAGRp2lFtg9UbKO6a' },
                { name: 'lucas_m', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAufy8LAAVL0ZZZDQ4X90h_Vyqyux9G5NRR7GBGUNK04-e1WmQ8emDxP-lzrvmnLsvsZ8HblCzE-vQ3t4TBxks3LM3HhS1xcxUstCcoipqGTFpqak1gDyYMNonkca6oIgk9ORhRubkn334qwebEgWw82v0tm4HEVGjcC01ksiCEpP5p6viC-_BAyu0z950oar8XRZ5uztEkHXf3E51SFJb8b9DpOCc7O8PDDp4NzATTyWzSvTGfbLfhgAOXJ9X-HZzdVe7KhIBrBsYo' },
                { name: 'elena_v', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb5gMiZ_p-VeLCIHZTWKqruxFlA_EGnEqqS4YQnLgCxoGz2Pzlko72htnSVqXow0bRQma8Y1xfpurUWa5Dmn-H0hm3vvJyEnCO4Vmhh2CXJDiPNqXVjQ8zXU3tEtbPW_MoHpg6CPf9vsLH7um2utEXNHVUYz79AAJJpACMCShXod14jJhmudg_vQiHHBBOY_vUgkbGV4AaFsOeU_traqE_GIiDrrtzBgK1rNy3HKXYTuxshl02beGBW-BxG__B8CBBsd5ctRdCgAJP' },
                { name: 'marcus.v', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7m7nvvxM2RhmPieh4ZNlqJeDg9WqRNqEcFBP7vX8z-25xoOqPTBL07DDFyfXSj_KbIjbBLOriwMzIv5_s5h8MhogAXtn6juSfNbt6CSxXT0m9nggdyQEJZ6bqNWioL6Lg-hILcp1pdXDGWyofKQPsxohtV5YcjIu0LIDRqz6JybuD5nxcSzsy-MVrxHjuMBhdTkqEI7_T6L3tvT0DDBeW8tWijkU_1g1aOJgvl9IRP9xMaaWNBR2FnCDvsS4qgrDVXnGy--I_nEOm' },
                { name: 'sofia_lux', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg-Li-cZXVf7mcZkFQ7wIzV50nuKAAqJci3hWbLr6XgWZ8KYSyb3IsSIhm8UfX8LNVUuTaQH9GKlv4dMPPvsLskSUEZdfBZmJU8BlFopKa111T9SxpbZnlq07ulwdTnxAVOcQdqI9pyqWhoTXy2qNxdJViNMjMMU52uuk0t-i7GsiVaD0qEn9RHCYYiIMNNYGqtz774_q9VeaPUQxzQrCDqY5IXailsxZsD07_0Kdbd-qTdFYfZ0U2cfN054jRfpb614uzBr_sOpD6' },
                { name: 'neon_eye', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh0HurebFLi7r_vVr60cte7Ui4GFPkPoZg3BCSr77UIKBeJqeqPOyA19s6ehdD49XUsq1qw8Ni9roosJ0xuvRAE7IM_uoNLtwvuf2STVyFntK2g5u5x6qG46t2sFeNw_EmkwaheewL1-0crHZl8zmM2eIT4_Yoz4cmCkxNgPmtCn023sJsDo7vFLvxeTKSGTo62pPws-IXkeszUhnY_DsSJisGuc8PIlaY1dTlpScnVvR1UMJrcPKEZ0mAU-pgAGRp2lFtg9UbKO6a' },
                { name: 'lucas_m', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAufy8LAAVL0ZZZDQ4X90h_Vyqyux9G5NRR7GBGUNK04-e1WmQ8emDxP-lzrvmnLsvsZ8HblCzE-vQ3t4TBxks3LM3HhS1xcxUstCcoipqGTFpqak1gDyYMNonkca6oIgk9ORhRubkn334qwebEgWw82v0tm4HEVGjcC01ksiCEpP5p6viC-_BAyu0z950oar8XRZ5uztEkHXf3E51SFJb8b9DpOCc7O8PDDp4NzATTyWzSvTGfbLfhgAOXJ9X-HZzdVe7KhIBrBsYo' },
            ].map((story, i) => (
                <div key={i} className="flex w-20 h-20  flex-col items-center gap-2 shrink-0 cursor-pointer">
                    <div className="rounded-full p-1 bg-linear-to-tr from-[#c799ff] via-[#ff96bb] to-[#c799ff]">
                        <img
                            className=" rounded-full object-cover border-2 border-[#0e0e0e]"
                            src={story.img}
                            alt={story.name}
                        />
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium tracking-tight">{story.name}</span>
                </div>
            ))}
        </section>
    )
}

export default Stories