import './Score.css'

export default function Score({score}) {
  return (
    <div className="fs-3 score">
        {
            [...Array(score)].map((_, index) => (
                <i key={index} className="bi bi-star-fill text-warning"></i>
            ))
        }
    </div>
  )
}
