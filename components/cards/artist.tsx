

export default function ArtistCard(props) {
  return (
    <div className = "pt-10">
      <h1 className = "text-3xl font-bold">{props?.artist.groupName}</h1>
      <p>{props?.artist.koreanGroupName}</p>
      <p>{props?.artist.debutDate}</p>
      <p>{props?.artist.company}</p>
      <p>{props?.artist.members}</p>
      <p>{props?.artist.originalMembers}</p>
      <p>{props?.artist.fanName}</p>
      <p>{props?.artist.active}</p>
    </div>
  )
}