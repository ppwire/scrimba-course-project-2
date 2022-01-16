export default function Content(props) {
   return (
      <div className="card-content">
         <h2>{props.title}</h2>
         <p>{props.description}</p>
      </div>
   )
}