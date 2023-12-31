import Layout from "@/components/Layout";

export default function MetodeAnalisisPage() {
  return (
    <Layout>
      <main>
        <h1 className="text-xl sm:text-2xl font-bold">
          Metode Analisis Risiko Kebakaran
        </h1>
        <section className="overflow-x-auto">
          <table className="w-full border-2 border-neutral-400 mt-5 min-w-[700px] text-[14px] sm:text-[16px]">
            <tbody>
              <tr className="bg-green-300">
                <th className="border-r-2 border-neutral-400 py-2">Kelas</th>
                <th className="border-r-2 border-neutral-400 py-2">Variabel</th>
                <th className="border-r-2 border-neutral-400 py-2">Bobot</th>
                <th className="border-r-2 border-neutral-400 py-2">
                  Klasifikasi
                </th>
                <th>Keterangan</th>
              </tr>
              <RowItem
                kelas="Bahaya"
                kelasRowSpan={21}
                variabel="Sebaran SPBU"
                variabelRowSpan={3}
                bobot="50%"
                bobotRowSpan={21}
                keterangan="0.05 km"
                klasifikasi="Tinggi"
              />
              <RowItem keterangan="1.2 km" klasifikasi="Sedang" />
              <RowItem keterangan="> 1.2 km" klasifikasi="Rendah" />
              <RowItem
                variabel="Sebaran SPBU Mini"
                variabelRowSpan={3}
                keterangan="0.05 km"
                klasifikasi="Tinggi"
              />
              <RowItem keterangan="1.2 km" klasifikasi="Sedang" />
              <RowItem keterangan="> 1.2 km" klasifikasi="Rendah" />
              <RowItem
                variabel="Sebaran Industri"
                variabelRowSpan={3}
                keterangan="0.05 km"
                klasifikasi="Tinggi"
              />
              <RowItem keterangan="1.2 km" klasifikasi="Sedang" />
              <RowItem keterangan="> 1.2 km" klasifikasi="Rendah" />
              <RowItem
                variabel="Sebaran Pasar dan Pusat Perbelanjaan"
                variabelRowSpan={1}
                klasifikasi=" "
                keterangan="Kepadatan"
              />
              <RowItem
                variabel="Sebaran Sekolah dan Perguruan Tinggi"
                variabelRowSpan={1}
                klasifikasi=" "
                keterangan="Kepadatan"
              />
              <RowItem
                variabel="Sebaran Rumah Sakit"
                variabelRowSpan={1}
                klasifikasi=" "
                keterangan="Kepadatan"
              />
              <RowItem
                variabel="Sebaran Toko Bahan Kimia"
                variabelRowSpan={3}
                klasifikasi="Tinggi"
                keterangan="0.05 km"
              />
              <RowItem keterangan="1.2 km" klasifikasi="Sedang" />
              <RowItem keterangan="> 1.2 km" klasifikasi="Rendah" />
              <RowItem
                variabel="Sebaran Toko Petasan"
                variabelRowSpan={3}
                klasifikasi="Tinggi"
                keterangan="0.05 km"
              />
              <RowItem keterangan="1.2 km" klasifikasi="Sedang" />
              <RowItem keterangan="> 1.2 km" klasifikasi="Rendah" />
              <RowItem
                variabel="Sebaran Instansi Militer"
                variabelRowSpan={3}
                klasifikasi="Tinggi"
                keterangan="0.05 km"
              />
              <RowItem keterangan="1.2 km" klasifikasi="Sedang" />
              <RowItem keterangan="> 1.2 km" klasifikasi="Rendah" />
              <RowItem
                kelas="Kerentanan"
                kelasRowSpan={9}
                bobot="30%"
                bobotRowSpan={9}
                variabel="Frekuensi Kebakaran"
                variabelRowSpan={3}
                klasifikasi="Tinggi"
                keterangan="> 5%"
              />
              <RowItem keterangan="2-5%" klasifikasi="Sedang" />
              <RowItem keterangan="< 2%" klasifikasi="Rendah" />
              <RowItem
                variabel="Kepadatan Bangunan"
                variabelRowSpan={1}
                klasifikasi=" "
                keterangan="Kepadatan"
              />
              <RowItem
                variabel="Kepadatan Penduduk"
                variabelRowSpan={3}
                klasifikasi="Tinggi"
                keterangan="> 200 jiwa / ha"
              />
              <RowItem keterangan="150-200 jiwa / ha" klasifikasi="Sedang" />
              <RowItem keterangan="< 150 jiwa / ha" klasifikasi="Rendah" />
              <RowItem
                variabel="Keberadaan Jalan"
                variabelRowSpan={2}
                klasifikasi="Tinggi"
                keterangan="> 3.5 m"
              />
              <RowItem keterangan="< 3.5 m" klasifikasi="Rendah" />
              <RowItem
                kelas="Kapasitas"
                kelasRowSpan={6}
                bobot="20%"
                bobotRowSpan={6}
                variabel="Keberadaan Pos Pemadam (15 menit)"
                variabelRowSpan={3}
                klasifikasi="Tinggi"
                keterangan=" "
              />
              <RowItem keterangan=" " klasifikasi="Sedang" />
              <RowItem keterangan=" " klasifikasi="Rendah" />
              <RowItem
                variabel="Sebaran Hidran"
                variabelRowSpan={1}
                klasifikasi=" "
                keterangan="Kepadatan"
              />
              <RowItem
                variabel="Keberadaan Sungai dan Embung"
                variabelRowSpan={1}
                klasifikasi=" "
                keterangan=" "
              />
              <RowItem
                variabel="Sebaran Kolam Renang dan Hotel"
                variabelRowSpan={1}
                klasifikasi=" "
                keterangan="Kepadatan"
              />
            </tbody>
          </table>
        </section>

        <section className="mt-5">
          <h1 className="text-lg sm:text-xl font-bold">Referensi</h1>
          <ul className="list-disc pl-5 mt-2">
            <li className="text-justify">
              Priambodo, D. (2018) Penentuan Nilai Jarak Aman
              SumberTidakBergerak: Skenario Kebakaran dan Ledakan pada SPBU dan
              SPPBE di Sekitar Tapak RDE. Jurnal Pengembangan EnergiNuklir;
            </li>
            <li>
              Yulianto, B., Tejamaya, M., (2022) AnalisisRisiko Kebakaran dan
              Ledakan Kegiatan Unloading Bahan Bakar Minyak di SPBU dengan
              menggunakan Dow's Fire & Explosion Index, ALOHA dan MARPLOT.
              Jurnal Ilmu Kesehatan Masyarakat; dan Sukma, A.J., Cahyono, R.B.,
              (2017) Analisis risiko potensi bahaya kebakaran dan ledakan
              beserta dampaknya pada pekerja dan masyarakat di PT.Pertamina -
              Terminal BBM Rewulu. Journal of Community Medicine and Public
              Health
            </li>
            <li className="text-justify">Peraturan BNPB No 2 Tahun 2012</li>
            <li className="text-justify">Permen PUPR No 20/PRT/M/2009</li>
            <li className="text-justify">SNI 03-1733-2004</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}

function RowItem(props: any) {
  const {
    kelas,
    variabel,
    bobot,
    klasifikasi,
    keterangan,
    kelasRowSpan,
    variabelRowSpan,
    bobotRowSpan,
  } = props;
  return (
    <tr className="border-t-2 border-neutral-400">
      {kelas && (
        <td
          className="text-center py-2 border-r-2 border-neutral-400"
          rowSpan={kelasRowSpan}
        >
          {kelas}
        </td>
      )}
      {variabel && (
        <td
          className="text-center py-2 border-r-2 border-neutral-400"
          rowSpan={variabelRowSpan}
        >
          {variabel}
        </td>
      )}
      {bobot && (
        <td
          className="text-center py-2 border-r-2 border-neutral-400"
          rowSpan={bobotRowSpan}
        >
          {bobot}
        </td>
      )}
      {klasifikasi && (
        <td className="text-center py-2 border-r-2 border-neutral-400">
          {klasifikasi}
        </td>
      )}
      {keterangan && <td className="text-center py-2">{keterangan}</td>}
    </tr>
  );
}
