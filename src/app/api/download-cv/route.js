import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public/uploads/cv.pdf')
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="nitish_cv.pdf"',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
        }
    })

}