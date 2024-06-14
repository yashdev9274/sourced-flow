"use client"

import { Agency, User } from "@prisma/client"
import React, { createContext } from "react";

interface ModalProviderProps {
    children: React.ReactNode
}

export type ModalData = {
    user?: User;
    agency?: Agency;
}

type ModalContextType = {
    data: ModalData
    isOpen: boolean
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void
    setClose: () => void
}

export const ModalContext = createContext<ModalContextType>({
    data: {},
    isOpen: false,
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => { },
    setClose: () => { }
})