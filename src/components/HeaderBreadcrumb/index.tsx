import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { HOME_CONSTANTS } from "../../configs/constants.config";
import { Home } from "../../props";
import { translate } from "../../helpers/translator";

interface Props {
    page: string
    tab: string
}

const HeaderBreadscrumb: React.FC<Props> = ({ page, tab }) => {
    const { menu } = useAppSelector(state => state.home);
    const { language, listLangs } = useAppSelector(state => state.lang);
    const [home, setHome] = useState<Home>({
        id: 0,
        created_at: '',
        image_desc: '',
        key: '',
        type: 1,
        updated_at: '',
        value: '{}'
    })
    useEffect(() => {
        if (menu.length > 0) {
            //find home
            const findHome = menu.find(m => m.key === HOME_CONSTANTS.BREADSCRUM);
            if (findHome) {
                setHome(findHome ? findHome : {
                    id: 0,
                    created_at: '',
                    image_desc: '',
                    key: '',
                    type: 1,
                    updated_at: '',
                    value: '{}'
                })
            }
        }
    }, [menu])
    return (
        <section className="w-full bg-banner px-[10%] py-[8%]">
            <div className="flex flex-col col-span-1 gap-4">
                <span className="capitalize font-medium text-white text-5xl">{page}</span>
                <span className="uppercase text-white text-sm">{translate(language, JSON.parse(home.value), listLangs)} &gt; <span className="text-[#fdcd2e]">{tab}</span></span>
            </div>
        </section>
    );
}

export default HeaderBreadscrumb;