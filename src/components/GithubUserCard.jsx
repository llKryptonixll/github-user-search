import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLink, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const GithubUserCard = ({isDark, userData}) => {

  const [day, setDay] = useState('');
  const [monthText, setMonthText] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const date = new Date(userData.created_at);
    const day = date.getDate();
    const monthText = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    setDay(day);
    setMonthText(monthText);
    setYear(year);
  }, [userData]);

  const innerBgClass = isDark === true ? "bg-darkBG" : "bg-whiteMainBG";
  const textClass = isDark === true ? "text-whiteText" : "";

  return (
    <>
      <div className='flex item justify-between'>
        <div className='flex'>
          <img className='rounded-full' width={'120px'} src={userData.avatar_url} alt="github-user-avatar" />
          <div className='grid items-center h-full sm:pl-12 pl-4'>
            <p className='grid'>
              <span className={`sm:text-3xl text-xl font-bold ${textClass}`}>{userData.name}</span>
              <span className='text-accentBlue sm:text-md text-sm'>@{userData.login}</span>
              <span className={`lg:hidden block sm:text-md text-sm ${textClass === "" ? "text-grey" : textClass}`}>Joined {`${day} ${monthText} ${year}`}</span>
            </p>
            <p className={`y lg:block hidden ${textClass === "" ? "text-grey" : textClass}`}>
              {userData.bio === null ? "This profile has no bio." : userData.bio}
            </p>
          </div>
        </div>

        <p className={`h-[52px] items-center lg:grid hidden ${textClass === "" ? "text-grey" : textClass}`}>
          Joined {`${day} ${monthText} ${year}`}
        </p>
      </div>
      <p className='h-[52px] text-grey lg:hidden block'>
        {userData.bio === null ? "This profile has no bio." : userData.bio}
      </p>

      <div className={`flex justify-between sm:pl-8 pl-4 sm:pr-8 pr-4 items-center justify-self-end lg:w-[81%] w-full h-[100px] rounded-lg ${innerBgClass}`}>
        <p className='grid'>
          <span className={`${textClass === "" ? "text-textAccent" : textClass} sm:text-md text-sm`}>Repo</span>
          <span className={`font-bold sm:text-2xl text-xl ${textClass === "" ? "text-blackText" : textClass}`}>{userData.public_repos}</span>
        </p>
        <p className='grid'>
          <span className={`${textClass === "" ? "text-textAccent" : textClass} sm:text-md text-sm`}>Followers</span>
          <span className={`font-bold sm:text-2xl text-xl ${textClass === "" ? "text-blackText" : textClass}`}>{userData.followers}</span>
        </p>
        <p className='grid'>
          <span className={`${textClass === "" ? "text-textAccent" : textClass} sm:text-md text-sm`}>Following</span>
          <span className={`font-bold sm:text-2xl text-xl ${textClass === "" ? "text-blackText" : textClass}`}>{userData.following}</span>
        </p>
      </div>
      
      <div className='lg:w-[81%] w-full md:h-[100px] h-[200px] justify-self-end grid items-center md:grid-cols-2'>
        <p className={`space-x-4 ${textClass === "" ? "text-textAccent" : textClass}`}>
          <FontAwesomeIcon className='text-xl w-[50px]' icon={faLocationDot} />
          <span>{userData.location}</span>
        </p>
        <p className={`space-x-4 ${textClass === "" ? "text-textAccent" : textClass}`}>
          <FontAwesomeIcon className='text-xl w-[50px]' icon={faLink} />
          <a target='_blank' href={userData.blog} aria-label='github-user-blog'>{userData.blog}</a>
        </p>
        <p className={`space-x-4 ${textClass === "" ? "text-textAccent" : textClass}`}>
          <FontAwesomeIcon className='text-xl w-[50px]' icon={faTwitter} />
          <span>{userData.twitter_username === null ? "Not Available" : userData.twitter_username}</span>
        </p>
        <p className={`space-x-4 ${textClass === "" ? "text-textAccent" : textClass}`}>
          <FontAwesomeIcon className='text-xl w-[50px]' icon={faBuilding} />
          <span>{userData.company === null ? "Not Available" : userData.company}</span>
        </p>
      </div>
    </>
  )
}

export default GithubUserCard