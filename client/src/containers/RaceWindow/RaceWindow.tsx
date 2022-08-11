import classes from './RaceWindow.module.scss'

import { useEffect } from 'react'
import { Skeleton, Stack } from '@mui/material'

import { HorsePosition } from '../../components/UI/HorsePosition/HorsePosition'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { raceActions } from '../../store/slices/raceSlice'

import type { Horse } from '../../types/types'
import { useErrorHandler } from 'react-error-boundary'


function sortHorses(horses: Horse[]) {
  const sortedHorses = [...horses]  //We have to unfreeze data that has been frozen by immer

  sortedHorses.sort((horse1, horse2) => (horse1.distance > horse2.distance ? -1 : 1))
  return sortedHorses
}


function RaceWindow() {
  const dispatch = useAppDispatch()
  const handleError = useErrorHandler()

  const { horses, isConnected, isError, error } = useAppSelector((appState) => appState.race)

  const sortedHorses = sortHorses(horses)

  useEffect(() => {
    dispatch(raceActions.startConnecting())
  }, [dispatch])

  if (isError) {
    handleError(error)
  }

  return (
    isConnected && !isError ?
      <ul
        className={classes.RaceWindow}
        aria-label='race-chart-list'
      >
        {sortedHorses.map(({ name, distance }, index) => (
          <HorsePosition
            key={name + index}
            position={index}
            name={name}
            distance={distance}
          />
        ))}
      </ul>
      :
      <Stack aria-label='loading' spacing={2} className={classes.Skeleton}>
        <Skeleton variant='rounded' height={60} width={1000} />
        <Skeleton variant='rounded' height={60} width={1000} />
        <Skeleton variant='rounded' height={60} width={1000} />
        <Skeleton variant='rounded' height={60} width={1000} />
        <Skeleton variant='rounded' height={60} width={1000} />
        <Skeleton variant='rounded' height={60} width={1000} />
      </Stack>
  )
}

export { RaceWindow }