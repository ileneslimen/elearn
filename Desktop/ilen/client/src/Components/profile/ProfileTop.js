import React from 'react'

const ProfileTop = ({profile}) => {
    let name=profile && profile.user && profile.user.name
    let avatar= profile && profile.user && profile.user.avatar
    let status=profile && profile.status
    let location=profile && profile.location
    let social=profile && profile.social
    
    return (
        <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src={avatar}
            alt=""
          />
          <h1 class="large">{name}</h1>
          <p class="lead">{status}</p>
          <p>{location }</p>
          <div class="icons my-1">
            {social&& social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter fa-2x"></i>
            </a>)}
            {social&& social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook fa-2x"></i>
            </a>)}
            {social&& social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>)}
            {social&& social.linkedin && (
             <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube fa-2x"></i>
            </a>)}
            {social&& social.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram fa-2x"></i>
            </a>)}
          </div>
        </div>
    )
}
export default ProfileTop