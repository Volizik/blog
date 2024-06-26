type Props = {
  name: string;
  picture: string;
  link: string;
};

export const Avatar = ({ name, picture, link }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
        <a className='flex flex-col' href={link}>
            <div>Автор статьи <span className="text-xl font-bold">{name}</span></div>
            <span>Посмотреть статью в оригинале...</span>
        </a>
    </div>
  );
};
