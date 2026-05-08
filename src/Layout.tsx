import './App.css'
import type {RootLayoutProps} from "./LayoutData.ts";

export default function RootLayout({children}: RootLayoutProps) {
    return (

        <body className="--font-outfit">
            {children}
        </body>
    );
}