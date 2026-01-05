import React, {
  FC,
  useState,
  ReactNode,
  SyntheticEvent,
  useEffect,
} from "react";
import { Section } from "@bennie-ui/section";
import { css, cx } from 'styled-system/css';
import { ToastProps } from "./toast.types";
import { toastBase, toastVariants, toastSizes } from "./toast.styles";
import { Icon } from "@bennie-ui/icons";
import { Button } from "@bennie-ui/button";

export const Toast: FC<ToastProps> = (properties) => {
  const { action, dismissable, duration, scale } = properties;
  const [is_visible, set_is_visible] = useState<boolean>(true);

  // Get variant and size classes
  const variantClass = toastVariants[action || "neutral"];
  const sizeClass = toastSizes[scale || "small"];

  // Build className from all sources
  const className = cx(
    toastBase,
    variantClass,
    sizeClass,
    properties.dismissable && css({ cursor: "pointer" }),
    !properties.dismissable && css({ cursor: "default" }),
    properties.rounded && css({ borderRadius: "lg" }),
    properties.css && css(properties.css),
    properties.className
  );

  const handleDismiss = () => {
    if (properties.dismissable) {
      set_is_visible(false);
      properties.onDismiss && properties.onDismiss()
    }
  }

  useEffect(() => {
    if (dismissable === true && duration && duration > 0) {
      const default_duration = duration * 1000;

      let timeOutId: ReturnType<typeof setTimeout>;
      timeOutId = setTimeout(() => {
        handleDismiss();
      }, default_duration);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [dismissable]);

  return (
    is_visible && (
      <Section
        className={className}
        onClick={handleDismiss}
      >
        {properties.children}
        {
          dismissable && (

            <Icon
              figure="XMarkIcon"
              className={css({
                h: 6, w: 6,
                color: action && action === "light" ? "black" : "white",
              })}
            />
          )
        }
      </Section >
    )
  );
};
