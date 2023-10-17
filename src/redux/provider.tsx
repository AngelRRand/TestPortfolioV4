"use client"

import React, {ReactNode} from "react";
import {Provider} from "react-redux";
import store from '@/src/redux';

export function ReduxProvider({children}: { children: ReactNode }) {
    // @ts-ignore
    return <Provider store={store}>{children}</Provider>;
}