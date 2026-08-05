"use client";

import { EmptyState, Table } from "@heroui/react";

const collections: any = [
  {
    id: 1,
    code: "REC-000001",
    tool: "Sistema de Ventas Web",
    paymentType: "Efectivo",
    amount: 25.0,
    collector: "Luis Bautista",
    date: "17/07/2026 08:30",
    status: "Confirmado",
  }
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-4 py-8 md:py-10">
      <Table className="min-h-50 w-full">
        <Table.ScrollContainer>
          <Table.Content
            aria-label="Tabla de usuarios"
            className="min-w-175"
          >
            <Table.Header>
              <Table.Column isRowHeader>Código</Table.Column>
              <Table.Column>Herramienta</Table.Column>
              <Table.Column>Tipo de Pago</Table.Column>
              <Table.Column className="text-right">Monto (Bs)</Table.Column>
              <Table.Column>Recaudador</Table.Column>
              <Table.Column>Fecha</Table.Column>
              <Table.Column>Estado</Table.Column>
            </Table.Header>

            <Table.Body
              renderEmptyState={() => (
                <EmptyState className="flex h-full w-full items-center justify-center">
                  No existen recaudaciones registradas.
                </EmptyState>
              )}
            >
              {collections.map((item: any) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.code}</Table.Cell>
                  <Table.Cell>{item.tool}</Table.Cell>
                  <Table.Cell>{item.paymentType}</Table.Cell>
                  <Table.Cell className="text-right">
                    {item.amount.toFixed(2)}
                  </Table.Cell>
                  <Table.Cell>{item.collector}</Table.Cell>
                  <Table.Cell>{item.date}</Table.Cell>
                  <Table.Cell>{item.status}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </section>
  );
}