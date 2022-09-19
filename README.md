# Jailmonkey-root-bypass
Frida script used to bypass Jailmonkey completely.

It hooks getConstants Method, and simply returns 0, frida may return some errors, saying that it needs to return a value of java.util.Map, but it works flawlessly.
