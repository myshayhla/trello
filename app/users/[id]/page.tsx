interface IdPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function IdPage({ params }: IdPageProps) {
  const { id } = await params;

  return <div>Id: {id}</div>;
}
