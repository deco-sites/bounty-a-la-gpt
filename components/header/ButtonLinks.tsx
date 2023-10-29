interface Links {
  label: string;
  href: string;
}

export interface Props {
  links?: Links[];
  style?: string;
}

export default function ButtonLinks({ links, style }: Props) {

  return (
    <div class={`flex`}>
        <ul class={`flex gap-6 items-center justify-center ${style ? style : ""}`}>
          {links?.map((link) => {
            return (
              <li class={`px-6 py-3 lg:last:border lg:last:border-primary lg:last:rounded-[4px]`}>
                <a href={link.href} class={`text-base`}>{link.label}</a>
              </li>
            );
          })}
        </ul>
    </div>
  );
}
