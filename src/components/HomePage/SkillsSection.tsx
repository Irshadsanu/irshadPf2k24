import { RefObject, useRef } from "react"
import useIntersectionObserver from "../../hooks/useInterSectionObsever";

export function SkillsSection()
{
    return (
        <section className="my-24">
            <h1 className="container px-8 mx-auto font-bold text-primary text-3xl mb-8">SKILLS</h1>
            <div className="flex container mx-auto px-8 gap-4 justify-center items-center flex-wrap">
                {
                    [
                        {
                            title:"Frame Works",
                            fields:{
                                "Flutter":.9,
                                "React":.6,                      
                                "Django":.45,                    
                                
                            }
                        },
                        {
                            title:"Backend Development",
                            fields:{
                                "FIREBASE":.95,                     
                                "NODE JS":.85,                     
                                "GCP":.6,                    
                                "MONGODB":.45,
                            }
                        },
                        {
                            title:"Languages",
                            fields:{
                                "Dart":.95,
                                "Javascript":.7,
                                "Python":.6,
                                "Typescript":.56,
                            }
                        },
                        {
                            title:"Platform",
                            fields:{
                                "ANDROID":.9,
                                "IOS":.85,
                                "WEB":.85,    
                            }
                        },
                        {
                            title:"Integration",
                            fields:{
                                "Payment Gateway":.85,
                                "Appstore":.8,
                                "Playstore":.8,
                                "Shiprocket":.75,
                                "Delhivery":.7,   
                                "Api":.8                 
                            }
                        },
                        {
                            title:"Authentication",
                            fields:{
                                "Firebase Authentication":.8,
                                "Appwrite":.7,
                            }
                        },
                        {
                            title:"Other Skills",
                            fields:{
                                "Problem Solving":.95,
                                "Data structure and Algorithms":.8,
                                "research new technologies":.85,
                                "Figma":.7,
                            }
                        }
                    ].map((category,index)=>{
                        return(
                            <SkillCard key={index} title={category.title} fields={category.fields}/>
                        )
                    })
                }
            </div>
        </section>
    )
}
function SkillCard(props:{title:string,fields:{[key:string]:number|undefined}})
{
    const cardRef = useRef<HTMLDivElement>(null);
    return(
        <div ref={cardRef} className="w-full xl:w-2/5 grow md:p-4 ">
            <h1 className="font-bold text-3xl">{props.title}</h1>
            <div className="flex-col flex gap-1 mt-4">
                {
                    Object.keys(props.fields).map((field,index)=>{
                        return(
                            <div key={index} className="mt-1 bg-primary/50 rounded-lg relative p-4 duration-300 hover:scale-[1.02] group">
                                <h1 className="z-10 relative font-bold opacity-90 hover:opacity-100 duration-300 uppercase">{field}</h1>
                                <SkillFill style={{"transitionDelay":`${index}00ms`}} card={cardRef} field={field} fields={props.fields}></SkillFill>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
function SkillFill(props:{fields:{[key:string]:number|undefined},field:string,card:RefObject<HTMLDivElement>,style:{[key:string]:string}})
{
    const fillRef = useRef<HTMLDivElement>(null);

    const isIntersecting = useIntersectionObserver(props.card,{threshold:.2});

    return(
        <div ref={fillRef} className={`fill-ref-class h-full absolute left-0 top-0 bg-primary rounded-lg origin-left duration-1000 ${isIntersecting?"scale-x-100":"scale-x-0"} flex items-center justify-end px-4`} style={{...props.style,width:props.fields[props.field]! * 100 + "%"}}>
            <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-tr from-primary to-accent duration-300 opacity-0 group-hover:opacity-100 rounded-lg"></div>
            <div className="relative z-10 hidden md:block">{(props.fields[props.field]!*100).toFixed(0)}%</div>
        </div>
    )
}