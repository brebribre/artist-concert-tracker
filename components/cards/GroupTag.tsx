

export default function GroupTag(props:any) {
    return (
    <div className = "text-xs md:text-sm mb-1 font-semibold text-slate-500 hover:text-slate-400">
        <a href={props.link} target='_blank'>{props.name}</a>
    </div>
    )
  }