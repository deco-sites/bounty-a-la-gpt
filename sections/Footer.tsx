export interface Props{
  copywrite: string;
}

export default function Footer({copywrite}: Props) {
  return (
    <div class="lg:container py-4 mx-8 md:mx-16 lg:mx-auto flex justify-center items-center gap-2">
      <span>{copywrite}</span>
    </div>
  );
}
