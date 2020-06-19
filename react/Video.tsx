/* eslint-disable jsx-a11y/media-has-caption */
import React, { VideoHTMLAttributes } from 'react'
import { defineMessages } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string
}

const CSS_HANDLES = ['container', 'videoElement'] as const

const Video: StorefrontFunctionComponent<VideoProps> = ({
  src,
  width,
  height,
  autoPlay,
  poster,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.container} db tc`}>
      <video
        className={`${handles.videoElement}`}
        controls
        width={width}
        height={height}
        autoPlay
      >
        <source src={src} type="video/mp4" />
      </video>

      <pre>
        src: {src}
        <br />
        width: {width}
        <br />
        height: {height}
        <br />
        autoPlay: {autoPlay}
        <br />
        poster: {poster}
      </pre>
    </div>
  )
}

const messages = defineMessages({
  title: { id: 'admin/editor.video.title', defaultMessage: '' },
  description: {
    id: 'admin/editor.video.description',
    defaultMessage: '',
  },
})

Video.schema = {
  title: messages.title.id,
  description: messages.description.id,
  type: 'object',
  properties: {},
}

export default Video
