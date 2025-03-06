import { message } from 'antd';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export const Notificacion = () => {
  const { notificacion } = useSelector(state => state.notificacionReducer)
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    if (notificacion.type === 'success') {
      messageApi.open({
        type: 'success',
        content: notificacion.content,
      });
    }
    if (notificacion.type === 'error') {
      messageApi.open({
        type: 'error',
        content: notificacion.content,
      });
    };
  }, [notificacion.date]);

  return (
    <>
      {contextHolder}
    </>
  )
}
