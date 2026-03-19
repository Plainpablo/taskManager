import React, { useState } from 'react'
import Overview from '../pages/Overview'
import Settings from '../pages/Settings'
import Task from '../pages/Task'
import Message from '../pages/Message'
import { usePage } from '../../context/PageContext';

const pages = {
  Overview: Overview,
  Settings: Settings,
  Messages: Message,
  Task: Task,
};

const ContentArea = () => {
   const {currentPage} = usePage();
  const CurrentPage = pages[currentPage];

  return (
    <div>
     { <CurrentPage/> }
    </div>
  )
}

export default ContentArea
