import React from "react";
import {
  Shield,
  Star,
  Heart,
  Book,
  ChevronDown,
  Sword,
  Target,
  Zap,
  Flag,
  Award,
  Medal,
  Users,
  ExternalLink,
  Flame,
  Home,
  CircleAlert,
  Menu,
  X,
  Search,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const iconMap = {
  Shield,
  Star,
  Heart,
  Book,
  ChevronDown,
  Sword,
  Target,
  Zap,
  Flag,
  Award,
  Medal,
  Users,
  ExternalLink,
  Flame,
  Home,
  CircleAlert,
  Menu,
  X,
  Search,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  fallback?: keyof typeof iconMap;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
