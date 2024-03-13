interface Props {
    page: string
}

const HeaderBreadscrumb: React.FC<Props> = ({ page }) => {
    return (
        <section className="w-full bg-banner h-[250px] px-[10%] pt-[8%]">
            <div className="grid grid-cols-2">
                <div className="flex flex-col col-span-1 gap-4">
                    <span className="capitalize font-medium text-white text-5xl">{page}</span>
                    <span className="uppercase text-white text-sm">home &gt; pages &gt; <span className="text-[#fdcd2e]">{page}</span></span>
                </div>
            </div>
        </section>
    );
}

export default HeaderBreadscrumb;