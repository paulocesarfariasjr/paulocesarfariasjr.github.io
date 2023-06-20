import Profile from "./components/Profile";

export default function App() {
  

  return (
    <div className="app">
    <Profile
      avatar="https://64.media.tumblr.com/9420c0725dd464011eeca683acb739ff/tumblr_ncmc7gvndn1tp5wz6o1_500.gif"
      name="Paulo Junior"
      bio="Full-stack javascript developer at Acme Inc."
      email="PauloJunior2645@gmail.com"
      phone="+55 2198765 - 4321"
      githubUrl="https://github.com"
      linkedinUrl="https://linkedin.com"
      twitterUrl="https://twitter.com"
    />
  </div>
  )
}

