import './socials.sass';

const socials = [
  { text: 'email', href: 'mailto:juliafokanova@gmail.com' },
  { text: 'telegram', href: 'https://t.me/Severus_Snape_prof' },
  { text: 'vk', href: 'https://vk.com/julia_fokanova' },
  { text: 'github', href: 'https://github.com/Professor-Severus-Snape' },
];

const Socials = () => {
  return (
    <ul className="socials">
      {socials.map(({ text, href }) => (
        <li key={text} className="socials__item">
          <a
            className={`socials__link socials__link_${text}`}
            href={href}
            {...(text === 'email'
              ? {}
              : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <span className="visually-hidden">{text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
