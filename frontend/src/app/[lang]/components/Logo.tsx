import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
	src,
	children,
	className,
}: {
	src: string | null;
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<Link
			href="/"
			aria-label="Back to homepage"
			className="flex items-center p-2"
		>
			{src && (
				<Image
					src={src}
					alt="logo"
					className={clsx("w-auto", className)}
					width={512}
					height={512}
				/>
			)}
			<div className="ml-2">{children}</div>
		</Link>
	);
}
