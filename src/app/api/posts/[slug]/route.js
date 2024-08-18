import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
   
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      return new NextResponse(JSON.stringify({ message: 'Post not found' }), { status: 404 });
    }

    
    const updatedPost = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true, cat: true },
    });

    return new NextResponse(JSON.stringify(updatedPost), { status: 200 });
  } catch (error) {
    console.error('Error updating post views:', error.message);
    return new NextResponse(JSON.stringify({ message: `Something went wrong: ${error.message}` }), { status: 500 });
  }
};

