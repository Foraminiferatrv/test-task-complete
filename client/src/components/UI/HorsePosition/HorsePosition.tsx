import classes from './HorsePosition.module.scss'

interface Props {
  name: string,
  distance: number,
  position: number
}


function HorsePosition({ name, distance, position }: Props) {
  const classesArray = [classes.HorsePosition]

  if (position === 0) classesArray.push(classes.FirstPlace)
  else if (position === 1) classesArray.push(classes.SecondPlace)


  return <li
    aria-label='horse-list-item'
    className={classesArray.join(' ')}
  >
    <div className={classes.HorsePlace}>{position + 1}</div>
    <div className={classes.HorseName}><span>Name: </span> {name}</div>
    <div className={classes.HorseDistance}><span>Distance: </span> {distance}</div>
  </li>
}

export { HorsePosition }