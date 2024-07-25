import { ReactNode, RefObject, useEffect, useRef } from "react"
import { gsap } from "gsap";

function WorkExperience()
{
    const experience = [
        {
            title: "SOFTWARE DEVOLEPER",
            hoverTitle: "FLUTTER DEVOLEPMENT",
            type: "SPINE CODES",
            subTitle: <>
                <h1 className="font-bold">DEC 2023 - PRESENT</h1>
                <div className="mt-4">Creating amazing apps,Api Specialist, Payment Gateway integration,Leading team, Data structure implimenting, Firebase expertice <br className="mt-4"/>Research technolgies and impliment any project,Authentication provider implimenting</div>
            </>,
            link: "https://www.linkedin.com/in/irshadsanu/"
        },
        {
            title: "SOFTWARE DEVOLEPER",
            hoverTitle: "FLUTTER DEVOLEPMENT",
            type: "NUEROBOTS",
            subTitle: <>
                <h1 className="font-bold">DEC 2022 - DEC 2023</h1>
                <div className="mt-4">
                    <ul className="">
                        <li>Maintaining Android and ios.</li>
                        <li>Problem solving & Mentorship.</li>
                        <li>Research latest technolgies and impliment in real Projects</li>
                    </ul>
                </div>
            </>,
            link: "https://www.linkedin.com/in/irshadsanu"
        },
        {
            title: "WEB DEVELOPER",
            hoverTitle: "React js",
            type: "FREELANCE",
            subTitle: <>
                <h1 className="font-bold">MAY 2022 - DEC 2022</h1>
                <div className="mt-4">
                    <ul>
                        <li>Designed 4+ websites and Hosting to Domain</li>
                        <li>Integrating complex features and ensuring seamless user experiences across platforms.</li>
                    </ul>
                </div>
            </>,
            link: "https://www.linkedin.com/in/irshadsanu"
        }
    ]
    const compRefs = [useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null)]
    useEffect(()=>{
        let ctx = gsap.context(() => {
            compRefs.forEach((ref,index)=>{
                if(ref.current === null)return;
                gsap.from(
                    ref.current,{
                        yPercent:100,
                        opacity:0,
                        ease:"power4.out",
                        delay:index*.1,
                        duration:1,
                        scrollTrigger:{
                            trigger:ref.current,
                            start:"top 100%",
                            end:"bottom top",
                            // scrub:true,
                            // markers:true
                        }
                    }
                )
            })
        })
        return () => ctx.revert(); // cleanup! 
    },[])

    return (
        <section className="my-24">
            <h1 className="container px-8 mx-auto font-bold text-primary text-3xl mb-8">WORK EXPERIENCE</h1>
            {
                experience.map((val, key) => {
                    return (
                        <Comp refElement={compRefs[key]} val={val} key={key}></Comp>
                    )
                })
            }
        </section>
    )
}

function Comp(props:{val:{title: string,hoverTitle: string,subTitle: ReactNode,link: string,type:string},refElement:RefObject<HTMLAnchorElement>})
{
  return (
    <a ref={props.refElement} href={props.val.link} target="_blank" className="py-8 px-4 2xl:py-0 block overflow-clip group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-primary after:origin-bottom hover:after:origin-left after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100">
        <div className="container relative mx-auto flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center">
            <div className="2xl:py-8 2xl:group-hover:-translate-y-full duration-500">
                <h1 className="flex items-center gap-8"><span className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{props.val.title}</span><span className="font-bold opacity-70">{props.val.type}</span></h1>
            </div>
            <div className="2xl:py-8 2xl:hidden opacity-70">
                <h1 className="flex items-center gap-8"><span className="text-md md:text-xl lg:text-3xl font-bold tracking-tighter">{props.val.hoverTitle}</span></h1>
            </div>
            <div className="hidden 2xl:flex flex-col justify-center translate-y-full group-hover:translate-y-0 absolute top-0 left-0 w-full h-full duration-500">
                <h1 className="flex items-center gap-8"><span className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{props.val.title}</span><span className="font-bold opacity-70">{props.val.type}</span></h1>
                <h1 className="flex items-center gap-8 opacity-80"><span className="text-md md:text-xl lg:text-3xl font-bold tracking-tighter">{props.val.hoverTitle}</span></h1>
            </div>
            <div className="2xl:py-8 w-full 2xl:w-96 text-xs md:text-sm opacity-90">
                {props.val.subTitle}
            </div>
        </div>
    </a>
  )
}

export default WorkExperience