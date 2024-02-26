import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body;

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: { connect: { email: userEmail } },
      },
    });
    res.status(200).send({
      message: "successfully created",
      data: residency,
    });
  } catch (error) {
    if (error.code === "P2002") {
      throw new Error("Your Residecy Address is already existed");
    }
    throw new Error(error);
  }
});

export const getAllResidency = asyncHandler(async (req, res) => {
  const getAllRes = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.status(200).send({
    message: "Get All Successfully",
    data: getAllRes,
  });
});

export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getRes = await prisma.residency.findUnique({ where: { id: id } });
    res.status(200).send({
      message: "Success",
      data: getRes,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});
