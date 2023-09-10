

export default function ArtistCard(props:any) {
  return (
    <div className = "pt-10">
      <h1 className = "text-3xl pb-4 font-bold">{props?.artist.groupName} ({props?.artist.koreanGroupName})</h1>
      <p><strong>Debut Date: </strong> {props?.artist.debutDate}</p>
      <p><strong>Company: </strong> {props?.artist.company}</p>
      <p><strong>Members: </strong>{props?.artist.members}</p>
      <p><strong>Original Members: </strong>{props?.artist.originalMembers}</p>
      <p><strong>Fanclub Name: </strong>{props?.artist.fanName}</p>
      <p><strong>Active: </strong>{props?.artist.active}</p>
    </div>
  )
}