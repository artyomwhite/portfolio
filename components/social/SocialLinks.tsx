"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  size?: "default" | "large";
}

export function SocialLinks({
  className,
  iconSize = 20,
  size = "default",
}: SocialLinksProps) {
  const buttonSize = size === "large" ? "h-12 w-12" : "h-10 w-10";
  const iconClass = size === "large" ? "h-5 w-5" : "h-5 w-5";

  return (
    <nav aria-label="Social links" className={cn("flex items-center gap-3", className)}>
      <ul className="flex items-center gap-3" role="list">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.name} (opens in new tab)`}
              className={cn(
                "glass social-hover flex shrink-0 items-center justify-center rounded-[12px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-graphite-400",
                buttonSize
              )}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={link.icon}
                alt=""
                width={iconSize}
                height={iconSize}
                className={cn(
                  "shrink-0 object-contain opacity-80",
                  iconClass,
                  link.id !== "github" && "brightness-0 invert"
                )}
              />
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
