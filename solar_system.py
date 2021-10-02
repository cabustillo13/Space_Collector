#!/usr/bin/env python
import json
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from datetime import date, datetime, timedelta
matplotlib.use('TkAgg')

# (int) simulation duration in days
sim_duration = 2 * 365
# Mass of Earth relative to mass of the sun
m_earth = 5.9722e24 / 1.98847e30
m_moon = 7.3477e22 / 1.98847e30


# define the objects: Basura 1, Basura 2, Basura 3 and Basura 4
class Object:
    def __init__(self, name, rad, color, r, v):
        self.name = name
        self.r = np.array(r, dtype=np.float64)
        self.v = np.array(v, dtype=np.float64)
        self.xs = []
        self.ys = []
        self.plot = ax.scatter(r[0], r[1], color=color, s=rad**2, edgecolors=None, zorder=10)
        self.line, = ax.plot([], [], color=color, linewidth=1.4)


class SolarSystem:

    def __init__(self, thesun):
        self.thesun = thesun
        self.planets = []
        self.time = None
        self.timestamp = ax.text(.03, .94, 'Date: ', color='w', transform=ax.transAxes, fontsize='x-large')

    def add_planet(self, planet):
        self.planets.append(planet)

    # evolve the trajectories
    def evolve(self):
        dt = 1
        self.time += timedelta(dt)
        plots = []
        lines = []
        for i, p in enumerate(self.planets):
            p.r += p.v * dt
            acc = -2.959e-4 * p.r / np.sum(p.r**2)**(3./2)  # in units of AU/day^2
            p.v += acc * dt
            p.xs.append(p.r[0])
            p.ys.append(p.r[1])
            p.plot.set_offsets(p.r[:2])
            plots.append(p.plot)
            p.line.set_xdata(p.xs)
            p.line.set_ydata(p.ys)
            lines.append(p.line)
        if len(p.xs) > 10000:
            raise SystemExit("Detenerse para evitar memory overflow")
        self.timestamp.set_text('Fecha: {}'.format(self.time.isoformat()))
        return plots + lines + [self.timestamp]


plt.style.use('dark_background')
fig = plt.figure(figsize=[6, 6])
ax = plt.axes([0., 0., 1., 1.], xlim=(-1.8, 1.8), ylim=(-1.8, 1.8))
ax.set_aspect('equal')
ax.axis('off')

with open("planets.json", 'r') as f:
    planets = json.load(f)

ss = SolarSystem(Object("Sun", 28, 'blue', [0, 0, 0], [0, 0, 0]))
ss.time = datetime.strptime(planets["date"], '%Y-%m-%d').date()

# Basura 1, Basura 2, Basura 3 and Basura 4 in solar system
nasaids = [1, 2, 3, 4]
colors = ['gray', 'orange', 'green', 'red']
texty = [.47, .73, 1, 1.5]

for i, nasaid in enumerate(nasaids):
    planet = planets[str(nasaid)]
    ss.add_planet(Object(nasaid, 20 * planet["size"], colors[i], planet["r"], planet["v"]))
    ax.text(0, - (texty[i] + 0.1), planet["name"], color=colors[i],
            zorder=1000, ha='center', fontsize='large')


def animate(i):
    return ss.evolve()


ani = animation.FuncAnimation(fig, animate, repeat=False, frames=sim_duration, blit=True, interval=20,)
plt.show()
# ani.save('solar_system_6in_150dpi.mp4', fps=60, dpi=150)

# Bibliografía: https://github.com/chongchonghe/Python-solar-system